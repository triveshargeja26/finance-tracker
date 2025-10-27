import { useState } from "react";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";

interface UserProps {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [user, setUser] = useState<UserProps>({
        email: "",
        password: ""
    })
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
    }
    return (
        <div className="h-screen flex items-center justify-center">
            <form method="POST" onSubmit={handleSubmit} className="flex  flex-col justify-between  px-6  py-10 border border-gray-300 rounded-xl h-96 w-2xl">
                <h1 className="text-2xl uppercase font-semibold">Login</h1>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-medium text-lg">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        className="border px-2 border-gray-400 rounded-lg text-md py-1"
                    />
                    <label htmlFor="password" className="font-medium text-lg mt-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        className="border px-2 border-gray-400 rounded-lg text-md py-1"

                    />
                    <p>Doesnt have account? <Link to={"/register"} className="text-red-600 cursor-pointer">Regsiter here</Link></p>
                </div>
                <Button type="submit" variant={"default"} className=" bg-blue-600 text-white w-32 cursor-pointer">Login</Button>
            </form >
        </div >
    )
}

export default Login;