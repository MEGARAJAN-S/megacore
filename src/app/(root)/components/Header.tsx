import { Button } from '@/components/ui/button'
import { ArrowUpToLine, HomeIcon, LogIn } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='flex bg-background/20 backdrop-blur-lg w-full h-16'>
            <div className='w-full px-20 py-4 border-b'>
                <div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <Button>
                                <Link href={"/"}>
                                    <HomeIcon />
                                </Link>
                            </Button>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <Button variant={"outline"}>
                                    <Link href={"/"} className='flex flex-wrap gap-2'>
                                        <LogIn />
                                        <span className='hidden md:block'>Log in</span>
                                    </Link>
                                </Button>
                            </div>
                            <div>
                                <Button>
                                    <Link href={"/"} className='flex flex-wrap gap-2'>
                                        <ArrowUpToLine />
                                        <span className='hidden md:block'>Sign up</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header