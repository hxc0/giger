import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { getUserPublicDataById, users } from '../../mocks/users';
import {
    setCurrentUser,
    setIsGod,
    setRequiresGodUserSelection,
    setUser,
    updateCurrentUser
} from '../../store/users.slice';
import {
    IUserBase,
    IUserPrivate,
    IUserPublic,
    UserRoles
} from '../../models/user';
import { RootState } from '../../store/store';
import {
    selectActiveUsers,
    selectCurrentUser,
    selectIsAdmin,
    selectIsGod
} from '../../store/users.selectors';
import { useApiService } from './api.service';

/**
 * TODO: Connect to backend once it exists
 */
export function useUserService() {
    const dispatch = useDispatch();
    const { api, loginCall } = useApiService();
    const userList = useSelector((state: RootState) => state.users.users);
    const activeUsers = useSelector(selectActiveUsers);
    const currentUser = useSelector(selectCurrentUser);
    const isGod = useSelector(selectIsGod);
    const isAdmin = useSelector(selectIsAdmin);

    /**
     * completely mocked now, obviously the password test will take place on backend
     * in case an godmode user logs in, we set the requiresGodUserSelection to true.
     * also we return a token for the godmode to use as authentication
     */
    const login = async (username: string, password: string) => {
        await loginCall(username, password);

        return new Promise<void>((resolve, reject) => {
            api.get(`User/private/byUsername${username}`)
                .then((userData) => {
                    dispatch(setCurrentUser(userData));
                    //saveLoginData(users[35]);
                    saveIsGod(userData.roles.includes(UserRoles.GOD));
                })
                .catch(() => {
                    reject('wrong password');
                });
            setTimeout(() => {}, 3000);
        });
    };

    // new Promise<void>((resolve, reject) => {
    //     if (password === 'test' && username === 'test') {
    //         console.log(`logging in ${username} with password ${password}`);

    //         setTimeout(() => {
    //             dispatch(setCurrentUser(users[35]));
    //             saveLoginData(users[35]);
    //             resolve();
    //         }, 3000);
    //     } else if (
    //         (username === 'god' && password === 'god') ||
    //         (username === 'admin' && password === 'admin')
    //     ) {
    //         console.log(`logging in ${username} with password ${password}`);
    //         setTimeout(() => {
    //             dispatch(setRequiresGodUserSelection(true));
    //             dispatch(setIsGod(true));
    //             saveIsGod(true);
    //             resolve();
    //         }, 3000);
    //     } else {
    //         console.log(
    //             `login failed for ${username} with password ${password}`
    //         );
    //         setTimeout(() => {
    //             reject('wrong password');
    //         }, 3000);
    //     }
    // });

    const saveLoginData = (userData: IUserPrivate) => {
        localStorage.setItem('loggedInUser', JSON.stringify(userData));
    };

    const saveIsGod = (isGod: boolean) => {
        localStorage.setItem('isGod', JSON.stringify(isGod));
    };

    const retrieveLoginData = (): void => {
        const userData = localStorage.getItem('loggedInUser');
        const isGod = localStorage.getItem('isGod');

        if (userData) {
            dispatch(setCurrentUser(JSON.parse(userData)));
        }

        if (isGod) {
            dispatch(setIsGod(JSON.parse(isGod)));
        }
    };

    const logout = (): void => {
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('isGod');
        dispatch(setCurrentUser(undefined));
    };

    const updateUserData = async (
        userId: string,
        userData: Partial<IUserPrivate>
    ) => {
        if (!userList.map((user) => user.id).includes(userId)) {
            throw new Error(`User with id ${userId} not found`);
        }

        const updatedData: Partial<IUserPrivate> = {
            ...userData
        };

        //! API CALL
        if (currentUser?.id === userId) {
            dispatch(updateCurrentUser(updatedData));
        } else {
            dispatch(setUser({ ...updatedData }));
        }
    };

    const canAnonymizeChatHandle = () => {
        return (currentUser && currentUser.hackingSkill >= 1) || isGod;
    };

    const getAnonymizedHandle = () => {
        const rand = v4().split('-');
        return [rand[0], rand[1]].join('');
    };

    const isInfluencer = (userId: string) => {
        const user = userList.find((user) => user.id === userId);

        return user?.roles?.includes(UserRoles.INFLUENCER);
    };

    async function getUserById(
        userId: string,
        type: 'private'
    ): Promise<IUserPrivate>;
    async function getUserById(
        userId: string,
        type: 'public'
    ): Promise<IUserPublic>;
    async function getUserById(
        userId: string,
        type: 'private' | 'public'
    ): Promise<IUserPrivate | IUserPublic> {
        switch (type) {
            case 'private':
                return users.find((user) => user.id === userId)!;
            case 'public':
                return getUserPublicDataById(userId);
        }
    }

    async function getUserByName(
        name: string,
        type: 'private'
    ): Promise<IUserPrivate>;
    async function getUserByName(
        name: string,
        type: 'public'
    ): Promise<IUserPublic>;
    async function getUserByName(
        name: string,
        type: 'private' | 'public'
    ): Promise<IUserPrivate | IUserPublic> {
        switch (type) {
            case 'private':
                return (await api.get(
                    `User/private/byName/${name}`
                )) as IUserPrivate;
            case 'public':
                return (await api.get(
                    `User/public/byName/${name}`
                )) as IUserPublic;
        }
    }

    const getBasicUserDataById = (userId: string): IUserBase | undefined => {
        return userList.find((user) => user.id === userId);
    };

    const getHandleForConvo = (convoId: string, userId: string) => {
        const user = userList.find((user) => userId === user.id);

        return user?.aliasMap[convoId] ?? user?.handle;
    };

    const toggleUserAsFavorite = async (favoriteUserId: string) => {
        const favoriteUserIds = new Set(currentUser!.favoriteUserIds);

        if (favoriteUserIds.has(favoriteUserId)) {
            favoriteUserIds.delete(favoriteUserId);
        } else {
            favoriteUserIds.add(favoriteUserId);
        }

        await updateUserData(currentUser!.id, {
            favoriteUserIds: Array.from(favoriteUserIds)
        });
    };

    const getCurrentUserFaction = () => {
        return currentUser?.faction;
    };

    const visibleUsers = isGod ? userList : activeUsers;

    return {
        login,
        logout,
        retrieveLoginData,
        isGod,
        isAdmin,
        updateUserData,
        currentUser,
        saveLoginData,
        getAnonymizedHandle,
        canAnonymizeChatHandle,
        getBasicUserDataById,
        getUserById,
        getUserByName,
        getHandleForConvo,
        toggleUserAsFavorite,
        isInfluencer,
        getCurrentUserFaction,
        visibleUsers
    };
}
