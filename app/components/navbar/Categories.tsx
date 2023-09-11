'use client'

import Container from "../Container"
import {BsSnow} from "react-icons/bs"
import {IoDiamond} from "react-icons/io5"
import {TbBeach, TbMountain, TbPool} from "react-icons/tb"
import {GiBarn, GiBoatFishing, GiCampfire, GiCastle, GiCaveEntrance, GiCaveman, GiDesert, GiIsland, GiWindmill} from "react-icons/gi"
import {MdOutlineVilla} from "react-icons/md"
import {FaSkiing} from 'react-icons/fa'
import CategoryBox from "../CategoryBox"
import { usePathname, useSearchParams } from "next/navigation"

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to beach'
    },
    {
        label: 'Windmill',
        icon: GiWindmill,
        description: 'This property has great scenic view of windmills'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property modern villa'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in countryside'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a pool'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on an island'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is near a lake'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities'
    },
    {
        label: 'Castle',
        icon: GiCastle,
        description: 'This property is in a castle'
    },
    {
        label: 'Camping',
        icon: GiCampfire,
        description: 'This property has campfire activities'
    },
    {
        label: 'Artic',
        icon: BsSnow,
        description: 'This property is in a snowy area'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This property is in a cave'
    },
    {
        label: 'Desert',
        icon: GiDesert,
        description: 'This property is in a desert'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is a barn'
    },
    {
        label: 'Luxury',
        icon: IoDiamond,
        description: 'This property is a luxury fire activities'
    },
        
] 

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname == '/';

    if(!isMainPage){
        return null;
    }


  return (
    <Container>
        <div className="
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto
        "
        >
            {categories.map((item) => (
                <CategoryBox
                    key={item.label}
                    label={item.label}
                    selected={category == item.label}
                    icon={item.icon}
                />
            ))}
        </div>
    </Container>
  );
}

export default Categories