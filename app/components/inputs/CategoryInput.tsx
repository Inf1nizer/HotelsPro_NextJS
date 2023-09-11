"use client"

import { IconType } from "react-icons";

interface CategoryInputProps {
    icon: IconType;
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;  

}

const CategoryInput: React.FC<CategoryInputProps> = ({
    icon: Icon,
    label,
    selected,
    onClick
}) => {
  return (
    <div
        onClick={() => onClick(label)} 
        className={`
            rounded-xl
            border-2
            border-[3px]
            p-4
            flex
            flex-col
            gap-3
            hover:border-blue-400
            transition
            cursor-pointer
            ${selected ? 'border-blue-700' : 'border-neutral-200'}
        `}>
            <Icon size={30} color="blue"/>
            <div className="font-semibold text-blue-900">
                {label}
            </div>
    </div>
  )
}

export default CategoryInput