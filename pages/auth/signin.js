import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

// Browser...
function signin({ providers }) {
    return (
        <>
            <Header />
            <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
                <img className='w-80' src='https://links.papareact.com/ocw' alt='Instagram Logo' />
                <p className='font-xs italic'>This is <span className='text-red-400 font-extrabold'>NOT A REAL</span> app, it is built for educational purposes only!</p>
                <div className='mt-40'>

                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button className='p-3 bg-blue-500 rounded-lg text-white' onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

// Server
export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signin
