import { AnimatedShinyText } from '@/modules/animatedshinytext'
import { ArrowRightIcon } from 'lucide-react'
import { SparklesText } from '@/modules/sparkle'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { NeonGradientCard } from '@/modules/neongradientcard'
import { Meteors } from '@/modules/meteors'

const Hero = () => {
  return (
    <div>
      <div>
        <div className='absolute h-full w-full overflow-hidden'>
          <Meteors />
        </div>
        <div>
          <div className='flex items-center justify-center pt-25'>
            <div className='inline-flex flex-wrap gap-2 border-2 py-1.5 px-1.5 bg-radial from-muted/40 to-neutral-700 rounded-full group hover:cursor-pointer transition'>
              <AnimatedShinyText>
                <span className=''>✨ Built for Strength. Powered by Precision.</span>
              </AnimatedShinyText>
              <ArrowRightIcon className="ml-1 size-4 self-center transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </div>
          </div>
          <div className='flex items-center justify-center pt-5'>
            <div className='text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>
              Elevate your gym to the next level using <br />
              <SparklesText className='text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>MegaCore's</SparklesText>{" "}
              powerful software solutions
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center pt-10 text-md'>
              <h3>Not just a software, a complete gym transformation</h3>
              <h3>MegaCore powers every step of gym's success</h3>
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center pt-10'>
              <div className='flex flex-row gap-2'>
                <Button>
                  Get Started for Free
                  <ArrowRightIcon className='size-4 self-center' />
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className='flex justify-center items-center pt-10 pb-40'>
              <div>
                <NeonGradientCard className='z-[-1]'>
                    <Image
                      src="/HeroImage.png"
                      alt="Hero Image"
                      width={800}
                      height={800}
                      className="md:w-[650px] md:h-[650px] object-cover sm:w-[300px] sm:h-[300px]"
                    />
                </NeonGradientCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero