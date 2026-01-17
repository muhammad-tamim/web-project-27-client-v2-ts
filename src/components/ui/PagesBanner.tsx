import bg from '../../assets/images/Recipes-background1.jpg'

interface PagesBannerProps {
    title: string;
}


const PagesBanner = ({ title }: PagesBannerProps) => {
    return (
        <div className='relative'>
            <img src={bg} className='object-cover w-full lg:h-52 h-40' alt="" />
            <div className="absolute inset-0 bg-black/60"></div>
            <h2 className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-semibold text-white">
                {title.toUpperCase()}
            </h2>
        </div>
    );
};

export default PagesBanner;