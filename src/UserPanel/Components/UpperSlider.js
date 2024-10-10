export default function UpperSlider() {
    return (
        <div>
            <section class="bg-white">
                <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1
                            class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-black">
                           Collaborate <br />Seamlessly, Anytime, &amp;Anywhere
                        </h1>

                        <p class="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl">
                        Unlock the true potential of your team with our cutting-edge Remote Collaboration Tool.
                            <a target="_blank" class="hover:underline text-black">Excellent </a> Flate for rent and
                            Whether you're working from the office, home, or halfway across the globe<b></b>
                        </p>

                        
                    </div>

                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={require('../../Assets/banner.jpg')} alt="hero image" />
                    </div>

                </div>
            </section>
        </div>
    );
}
