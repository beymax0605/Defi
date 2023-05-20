import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { BiX } from 'react-icons/bi';

const StepTwo = ({ signupData, setSignupData, step, setStep }) => {

    const [search, setSearch] = useState('');
    const [showSelector, setShowSelector] = useState(false);
    const [selected, setSelected] = useState({ 1: 'Chris' });
    const [options, setOptions] = useState([]);
    const searchInputRef = useRef(null);

    function clearOpts() {
        setSearch('');
        setShowSelector(false);
        setOptions([]);
    }

    function select(id, name) {
        setSelected(prevSelected => ({ ...prevSelected, [id]: name }));
        clearOpts();
        window.dispatchEvent(new CustomEvent('selected', { detail: Object.keys(selected) }));
    }

    function remove(id) {
        setSelected(prevSelected => {
            const newSelected = { ...prevSelected };
            delete newSelected[id];
            return newSelected;
        });
        window.dispatchEvent(new CustomEvent('selected', { detail: Object.keys(selected) }));
    }

    function goSearch() {
        if (search) {
            setOptions({ 5: 'Carl', 6: 'Alex', 7: 'Bryan' });
            setShowSelector(true);
        } else {
            setShowSelector(false);
        }
    }

    function handleClick() {
        searchInputRef.current.focus();
    }


    function handleOutsideClick(event) {
        if (!event.target.closest('.bg-white')) {
            setShowSelector(false);
        }
    }

    useEffect(() => {
        function handleSelected(event) {
            console.log(event.detail);
        }
        window.addEventListener('selected', handleSelected);
        return () => {
            window.removeEventListener('selected', handleSelected);
        };
    }, []);

    const router = useRouter()

    return (
        <div className='flex flex-col  items-center'>
            <div className='w-full h-[53vh] flex-col flex justify-between '>
                <div className="px-2 mb-2">
                    <span className="description text-white w-full text-center text-[24px] mb-[15px]">
                        Select projects to follow
                    </span>
                    <div className="spanclass mt-3 w-full text-center text-white/60 text-[14px] mb-[30px]">
                        Choose which projects and tokens to follow and stay informed on
                        the latest news and updates
                    </div>
                    <div className="h-[186px] border border-white border-opacity-50 rounded-[16px]  bg-[#21212A] p-3 ">
                        <div className="grid grid-flow-col grid-rows-3 gap-4 relative">
                            <div className="rounded-xl p-2 flex gap-1 flex-wrap" onClick={handleClick} onClickOutside={handleOutsideClick}>
                                {Object.entries(selected).map(([id, name]) => (
                                    <div key={id} className="bg-[#A6B0CF]/20 rounded-lg flex items-center h-[32px]">
                                        <div className="p-2">{name}</div>
                                        <div onClick={() => remove(id)} className="p-2 select-none rounded-r-md cursor-pointer hover:bg-magma-orange-clear">
                                            <BiX className='text-white' size={20} />
                                        </div>
                                    </div>
                                ))}
                                <div className="flex-1">
                                    <input type="text" value={search} onChange={event => setSearch(event.target.value)} ref={searchInputRef}
                                        onInput={() => setTimeout(goSearch, 400)} placeholder="Search"
                                        className="bg-transparent w-full border-0 focus:border-0 focus:outline-none focus:ring-0 py-1 px-0" />
                                    {showSelector && (
                                        <div className="absolute left-0 bg-[#1f1e1d]/40 opacity-60 z-30 w-full rounded-b-md font-medium">
                                            <div className="p-3 space-y-2">
                                                {Object.entries(options).map(([id, name]) => (
                                                    <div key={id}>
                                                        {!selected[id] && (
                                                            <div onClick={() => select(id, name)}
                                                                className="bg-[#111015]/60 flex w-9/12 items-center justify-start border border-white/50 cursor-pointer rounded-2xl px-3 py-4 hover:border-light-blue-1">
                                                                <Image src={`https://picsum.photos/${Math.ceil(Math.random() * (900 - 500) + 500)}/${Math.ceil(Math.random() * (900 - 500) + 500)}`} className="rounded-full object-cover w-8 h-8" width={32} height={32} />
                                                                <span className='ml-4 text-white'>{name}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                                {options.length === 0 && (
                                                    <div className="text-gray-500">
                                                        No result
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span onClick={() => setStep(step + 1)} className='text-center underline text-white/80 hover:text-white'>Skip this step</span>
            </div>
        </div>
    )
}

export default StepTwo