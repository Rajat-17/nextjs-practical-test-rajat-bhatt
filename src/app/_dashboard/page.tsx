import Slider from '@/components/image/slider';

const Dashboard = () => {
    return (
        <>
            <section className="py-8 w-full">
                <div className="container mx-auto flex flex-col items-center justify-center h-screen">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Our Restaurant</h1>
                    <p className="text-lg mb-8">
                        Experience the best food in town with our expert chefs and friendly staff. We offer a wide range of dishes to suit every taste and preference.
                        From classic favorites to innovative creations, our menu is designed to delight your senses.
                    </p>
                    <p className="text-lg mb-8">
                        Our restaurant is committed to providing exceptional customer service and ensuring that every guest has a memorable dining experience.
                        We strive to create a warm and inviting atmosphere that makes you feel at home.
                    </p>
                </div>
            </section>

            <section className="py-8 w-full animate-fade-in">
                <div className="container mx-auto flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <h2 className="text-3xl font-bold mb-4">Fresh Ingredients</h2>
                        <p className="text-lg">We use only the freshest ingredients to ensure the best taste and quality. Our chefs carefully select every ingredient to create dishes that are both delicious and nutritious.</p>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <h2 className="text-3xl font-bold mb-4">Expert Chefs</h2>
                        <p className="text-lg">Our chefs are trained to provide the best culinary experience. With years of experience and a passion for cooking, they create dishes that are both visually appealing and mouth-watering.</p>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <h2 className="text-3xl font-bold mb-4">Friendly Staff</h2>
                        <p className="text-lg">Our staff is dedicated to providing exceptional customer service. They are friendly, attentive, and always ready to help you with any questions or requests you may have.</p>
                    </div>
                </div>
            </section>

            <section className="py-8 w-full animate-fade-in">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Featured Dishes</h2>
                    <Slider 
                        images={[
                            {src: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132029/german-chocolate-killer-brownie-tin-pack.5ebc34160f28767a9d94c4da2e04c4b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1', alt: 'image-01'},
                            {src: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132206/original-cannoli-pie.4cb5b9ba82f57b69b90765fd9f07aa1a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1', alt: 'image-02'},
                            {src: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131947/raspberry-chocolate-pie.c40248c44adb974a159d7f100011c987.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1', alt: 'image-03'}
                        ]}
                    />
                </div>
            </section>

            <section className="py-8 w-full animate-fade-in delay-100">
                <div className="container mx-auto flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <p className="text-lg">
                        {`Our restaurant was founded on the principles of quality, service, and community. We believe that food has the power to bring people together and create lasting memories.
                        That's why we're committed to providing the best dining experience possible.`}
                    </p>
                </div>
            </section>

            <section className="py-8 w-full animate-fade-in delay-200">
                <div className="container mx-auto flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <h2 className="text-3xl font-bold mb-4">Awards and Recognition</h2>
                        <p className="text-lg">{`We're proud to have received numerous awards and recognition for our exceptional service and culinary expertise.`}</p>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <h2 className="text-3xl font-bold mb-4">Community Involvement</h2>
                        <p className="text-lg">{`We're committed to giving back to our community through various initiatives and charitable events.`}</p>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
                        <p className="text-lg">{`Don't just take our word for it! Hear what our satisfied customers have to say about their dining experience.`}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard;
