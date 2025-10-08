import Image from 'next/image'
import {CookingPotIcon, MailIcon, NotebookIcon, VideoIcon, YoutubeIcon} from "lucide-react";

export default function TestPage() {
    return (
        <>
            <div className='flex flex-col items-center justify-center space-y-5' style={{paddingTop: 5 + 'em', paddingBottom: 10 + 'em'}}>
                <h1 className='font-extrabold'>My Obsession with Artisanal Croissants</h1>
                <div className='flex flex-row items-center justify-center space-x-2'>
                    <CookingPotIcon/>
                    <h2> Recipes and how to make them</h2>
                </div>
                <div className='flex flex-row items-center justify-center space-x-6'>
                    <Image src={'/croissant.png'} alt={"Artisanal Croissant"} width="256" height="256"/>
                    <div className='flex flex-col items-center justify-center space-y-3'>
                        <p className='w-100 text-justify'>Hi. I am a student who loves baking as much as they love
                            computers. I, particularly,
                            love to make different kinds of bread. One of my favorite kinds of bread is the croissant:
                            its soft inside,
                            combined with a slightly harder, chewy outer texture makes it my go-to bread type.
                        </p>
                        <p className='w-100 text-justify'>Artisanal croissants are handcrafted pastries made using
                            traditional French
                            techniques, high-quality ingredients like premium butter, and a slow, deliberate baking
                            process.
                            Key characteristics include a flaky, crispy exterior, an airy, buttery interior with
                            distinct
                            layers (a honeycomb structure), and a rich flavor resulting from slow fermentation and
                            skilled
                            lamination of the dough.
                        </p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center space-x-2'>
                    <NotebookIcon/>
                    <p className='w-192'>
                        If you want to learn how to make your own artisanal croissants, you can check out&nbsp;
                        <a href={'https://www.emmafontanella.com/the-easiest-croissants'}
                           className='underline text-blue-400'>Emma Fontanella&#39;s</a>&nbsp;
                        web page for instructions on how to make a nice croissant.
                    </p>
                </div>
                <div className='flex flex-row items-center justify-center space-x-2'>
                    <VideoIcon/>
                    <p className='w-192'>
                        If you are more of a visual learner, <b className='font-bold'>try watching the following YouTube
                        video</b>:
                    </p>
                </div>
                <iframe width="720" height="405" className='p-5 bg-black rounded-md'
                        src="https://www.youtube-nocookie.com/embed/RlFBTrqea2g?si=UUdGAvFfKFQ_lDPb"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                </iframe>
                <p className='w-192'>
                    If you wanna go even deeper, check out the following spotify playlist. It has been curated for
                    bakers
                    like you to enjoy the full croissant experience.
                </p>
                <iframe className="rounded-md" width="720" height={"405"}
                        src="https://open.spotify.com/embed/playlist/1T46jt8M7OnXs4ZdItcpuh?utm_source=generator"
                        frameBorder="0" allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy">
                </iframe>
                <div className='flex flex-col space-x-2'>
                    <p className='w-192'>
                        Want more croissant inspiration? Reach out to me!
                    </p>
                    <div className='flex flex-row space-x-2'>
                        <MailIcon/> <a className='text-blue-400 underline' href="mailto:contact.ayimay@proton.me">My contact E-Mail</a>
                    </div>
                </div>
            </div>
        </>
    )
}