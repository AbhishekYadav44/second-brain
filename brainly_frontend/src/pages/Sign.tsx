import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";


export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  async function signin() {
    try {
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;

      const response = await axios.post(
        `${BACKEND_URL}/api/v1/signin`,
        {
          username,
          password,
        }
      );

      const jwt = response.data.token;

      localStorage.setItem("token", jwt);

      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials or user not registered");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#c1bfbf] via-[#9b9fa4] to-[#c1bfbf] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="backdrop-blur-md bg-white/40 border border-white/30 shadow-2xl rounded-3xl p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
             <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-700 hover:text-black transition mb-6"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
            <h1 className="text-4xl font-serif text-center">
              Welcome Back
            </h1>

            <p className="text-center text-zinc-700 mt-3">
              Sign in to access your second brain.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 space-y-4"
          >
            <div className="bg-white rounded-xl border border-zinc-300 px-3 py-2">
              <Input
                ref={usernameRef}
                placeholder="Username"
              />
            </div>

            <div className="bg-white rounded-xl border border-zinc-300 px-3 py-2">
              <Input
                ref={passwordRef}
                placeholder="Password"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6"
          >
            <Button 
              text="Sign In"
              onClick={signin}
              varient="primary"
              size="md"
              fullwidth={true}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-6 text-sm text-zinc-700"
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold hover:underline"
            >
              Create one
            </Link>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 text-xs text-zinc-600 bg-white/40 px-4 py-2 rounded-full border border-white/30">
              <span>🧠</span>
              <span>Your External Brain For The Internet</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}