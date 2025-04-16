import { Link } from '@chakra-ui/react'
import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from 'react-icons/fi'
import { HiOutlineEnvelope } from 'react-icons/hi2'

const Member = ({member}) => {
    return (
        <div className="bg-white rounded-xl p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-sm hover:shadow-md max-h-[280px]">
            <div className="flex items-center gap-2 !border-b-slate-100 !border-b-2 pb-3 mb-3">
                <img src={member.avatar} loading='lazy' alt="user" className="bg-purple-950 h-14 w-14 rounded-full" />
                <div className="flex flex-col">
                    <span className="text-lg font-semibold leading-4">{`${member.first_name} ${member.last_name}`}</span>
                    <span className="text-sm text-gray-400">{member.employment.title}</span>
                </div>
            </div>

            <div className="flex flex-col gap-3 text-gray-500">
                <div className="flex items-center gap-2">
                    <div className="">
                        <HiOutlineEnvelope className='!text-shadow-purple-950'/>
                    </div>
                    <span className="">{member.email}</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="">
                        <FiPhoneCall className='!text-shadow-purple-950'/>
                    </div>
                    <span className="">{member.phone_number.slice(0,17)}</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="">
                        <GrLocation className='!text-shadow-purple-950'/>
                    </div>
                    <span className="">{`${member.address.city}, ${member.address.country}`}</span>
                </div>

                <Link 
                    href="https://www.linkedin.com/in/kingsley-okereke-5b3426221" 
                    isExternal
                    _hover={{textDecoration: "none", color: "blue.300"}}
                    className='flex items-center gap-2'>
                    <div className="">
                        <CiLinkedin className='!text-shadow-purple-950'/>
                    </div>
                    <span className="">{member.username}</span>
                </Link>
            </div>
        </div>
    )
}

export default Member