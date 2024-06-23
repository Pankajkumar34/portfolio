"use client"
import React, { useMemo } from 'react'
import Herobackground from '../assets/hero-bg.jpg'
import HeroImage from '../assets/hero-img.png'
import Image from 'next/image'
import * as THREE from 'three'
// https://devis-nextjs.vercel.app/
import { Canvas, useFrame } from '@react-three/fiber'
import { Trail, Float, Line, Sphere, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useRef } from 'react'
import { useEffect } from 'react'


const HomeHeroSec = () => {
 

    return (
        <section className='main_home sm:h-[70vh] lg:h-screen flext items-center ' style={{ position: 'relative', zIndex: -1 }}>
            <Image
                alt="Mountains"
                src={Herobackground}
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                    objectFit: 'cover', // cover, contain, none
                }}
            />

            <div className='container '>
                <div className=' pt-[100px] home_contents sm:block lg:flex xl:flex lg:justify-between lg:items-center relative z-[99999]'>
                    <div className='home_heading  text-white w-[70%] '>
                        <div className="st-height-b80 st-height-lg-b80"></div>
                        <div className='hero_text'>
                            <h3 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className="aos-init aos-animate">Hello, I’m</h3>
                        </div><h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" className=" aos-init aos-animate sm:text-[60px] lg:text-[120px]">Pankaj <br /> Kumar</h1>
                        <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" className="aos-init aos-animate sm:!text-[22px]">Mern Stack Developer</h2>
                        <div className="st-hero-btn " data-aos="fade-up" data-aos-duration="800" data-aos-delay="500"><a className="st-btn st-style1 st-color1" href="contact">Hire Me</a></div>

                    </div>
                    <div className='home_image sm:hidden lg:block' style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Canvas
                            camera={{ position: [0, 0, 10] }}
                            style={{ width: '600px', height: '600px', margin: "auto" }}
                        >
                            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                                <Atom />
                            </Float>
                            <Stars saturation={0} count={400} speed={0.5} />
                            <EffectComposer>
                                <Bloom luminanceThreshold={1} radius={0.7} />
                            </EffectComposer>
                        </Canvas>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default HomeHeroSec

function Atom(props) {
    const points = React.useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), []);
    return (
        <group {...props}>
            <Line worldUnits points={points} color="turquoise" lineWidth={0.3} />
            <Line worldUnits points={points} color="turquoise" lineWidth={0.3} rotation={[0, 0, 1]} />
            <Line worldUnits points={points} color="turquoise" lineWidth={0.3} rotation={[0, 0, -1]} />
            <Electron position={[0, 0, 0.5]} speed={6} />
            <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={6.5} />
            <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={7} />
            <Sphere args={[0.55, 64, 64]}>
                <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
            </Sphere>
        </group>
    );
}

function Electron({ radius = 2.75, speed = 6, ...props }) {
    const ref = React.useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed;
        ref.current.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0);
    });
    return (
        <group {...props}>
            <Trail local width={5} length={6} color={new THREE.Color(2, 1, 10)} attenuation={(t) => t * t}>
                <mesh ref={ref}>
                    <sphereGeometry args={[0.25]} />
                    <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
                </mesh>
            </Trail>
        </group>
    );
}



