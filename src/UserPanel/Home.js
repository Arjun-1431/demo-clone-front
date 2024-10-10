import UpperSlider from "./Components/UpperSlider"
import Video from "./Components/Video"
import Features from "./Components/Features"
import Counter from "./Components/Counter"
export default function Home() {
    return (
        <>
             <UpperSlider/>
            <section class="mx-auto py-16">
                <div class="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
                    <div class="text-center">
                        <h2 class="bg-clip-text text-3xl font-extrabold text-gray-700 sm:text-5xl">Get in touch</h2>
                        <p class="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">Let's take your business to the moon</p>
                        <a href="#" class="shadow-pink-600/30 mt-10 inline-flex h-12 items-center rounded-full bg-pink-500 px-6 py-3 text-xl font-light text-white shadow-md transition hover:translate-y-1 hover:scale-105 hover:bg-pink-600 hover:shadow-lg">Contact Us</a>
                    </div>
                </div>
            </section>

            
            <Video/>
            <Counter/>
            <Features/>

     
        </>
    )
}