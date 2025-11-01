import { useState } from "react";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface UserProps {
    username: string;
    email: string;
    password: string;
}

const Register: React.FC = () => {
    const [user, setUser] = useState<UserProps>({
        username: "",
        email: "",
        password: ""
    })
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        try {
            localStorage.setItem("users", JSON.stringify(user))
            const isRegistered = localStorage.getItem("users")

            if (isRegistered) {
                const parsedUser = JSON.parse(isRegistered)

                const hasValidData = Object.values(parsedUser).some(value => value !== "" && value !== null && value !== undefined)

                if (parsedUser && hasValidData) {
                    toast.success("User registered successfully!")
                } else {
                    toast.error("Error: User details are empty. Registration failed.")
                }
            } else {
                toast.error("Error: Registration failed. Please try again.")
            }
        } catch (error) {
            toast.error("Error: Unable to register user. Please try again.")
            console.error("Registration error:", error)
        }
    }
    return (
        <div className="h-screen flex items-center justify-center">
            <form method="POST" onSubmit={handleSubmit} className="flex  flex-col justify-between  px-6  py-6 border border-gray-300 rounded-xl h-[420px] w-2xl">
                <h1 className="text-2xl uppercase font-semibold">Register</h1>
                <div className="flex flex-col gap-1">
                    <label htmlFor="username" className="font-medium text-lg">Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        className="border px-2 border-gray-400 rounded-lg text-md py-1"
                        required
                    />
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
                        required

                    />
                    <p>Already have account? <Link to={"/"} className="text-red-600 cursor-pointer">Login here</Link></p>

                </div>
                <Button type="submit" variant={"default"} className=" bg-[#34656D] text-white w-32 cursor-pointer">Register</Button>
            </form >
        </div >
    )
}

export default Register;