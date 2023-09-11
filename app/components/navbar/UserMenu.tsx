"use client";

import {AiOutlineMenu} from 'react-icons/ai';
import Avatar from '../Avatar';
import {useCallback, useState} from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import useRentalModal from '@/app/hooks/useRentalModal';
import { useRouter } from 'next/navigation';

interface UserMenuProps{
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentalModal();
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    const onRent = useCallback(() => {
        if(!currentUser){
            return loginModal.onOpen();
        }

        //Open Rent Model
        rentModal.onOpen();

    },[currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
        <div className="flex flex-row items-center gap-3">
            <div
            onClick={onRent}
            className="
                hidden
                md:block
                text-sm
                font-bold
                py-3
                px-4
                rounded-full
                hover:bg-blue-100
                transition
                cursor-pointer
            "
            >
                Register your Hotel
            </div>
            <div
            onClick={toggleOpen}
            className="
                p-4
                md:py-1
                md:px-2
                border-[3px]
                flex
                flex-row
                items-center
                gap-3
                shadow-lg
                rounded-full
                cursor-pointer
                hover:shadow-md
                hover:border-blue-300
                transition
            "
            >
                <AiOutlineMenu />
                <div className='hidden md:block'>
                    <Avatar src={currentUser?.image}/>
                </div>

            </div>
        </div>
        {isOpen && (
            <div
            className='
                absolute
                rounded-xl
                shadow-md
                w-[40vw]
                md:w-3/4
                bg-white
                overflow-hidden
                right-0
                top-12
                text-sm
            '
            >
                <div className='flex flex-col cursor-pointer'>
                    {currentUser ? (
                        <>
                        <MenuItem
                            onClick={() => router.push("/trips")}
                            label = "My Trips"
                        />
                        <MenuItem
                            onClick={() => router.push("/favorites")}
                            label = "My Favourites"
                        />
                        <MenuItem
                            onClick={() => router.push("/reservations")}
                            label = "My Reservations"
                        />
                        <MenuItem
                            onClick={() => router.push("/properties")}
                            label = "My Propertites"
                        />
                        <MenuItem
                            onClick={rentModal.onOpen}
                            label = "Hotel my home"
                        />
                        <hr/>
                        <MenuItem
                            onClick={() => signOut()}
                            label = "LogOut"
                        />
                                            
                    </>
                    ): (
                        <>
                            <MenuItem
                                onClick={loginModal.onOpen}
                                label = "Login"
                            />
                            <MenuItem
                                onClick={registerModal.onOpen}
                                label = "Sign-Up"
                            />
                        </>
                    )}
                </div>
            </div>
        )}
    </div>
  );
}

export default UserMenu