
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, Mail, Lock } from 'lucide-react';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen w-full font-sans">
      {/* Left Pane - Branding & Illustration */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#101922] overflow-hidden flex-col justify-between p-16 text-white">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-600 via-[#101922] to-[#101922]"></div>
        
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <Layers size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight">NexusFlow</span>
        </div>

        <div className="relative z-10 flex flex-col justify-center flex-1 py-16">
          <div className="w-full max-w-lg aspect-[4/3] relative rounded-2xl shadow-2xl overflow-hidden border border-white/10 group">
             <img 
               src="https://picsum.photos/seed/dash/800/600" 
               alt="Dashboard Preview" 
               className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#101922]/90 via-transparent to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <img key={i} src={`https://picsum.photos/seed/u${i}/32/32`} className="size-8 rounded-full border-2 border-[#101922]" alt="User" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-emerald-400">Trusted by 10,000+ teams</span>
                </div>
                <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white mb-4">
                  Boost your enterprise <br/> productivity
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                  Streamline your workflow with our all-in-one platform. Join thousands of teams who trust NexusFlow.
                </p>
             </div>
          </div>
        </div>

        <div className="relative z-10 text-sm text-slate-500">
          © 2023 NexusFlow Inc. All rights reserved.
        </div>
      </div>

      {/* Right Pane - Form */}
      <div className="flex flex-1 flex-col justify-center items-center p-8 bg-white lg:p-16">
        <div className="w-full max-w-[400px] flex flex-col gap-10">
          <div className="lg:hidden flex items-center gap-2 mb-4">
            <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <Layers size={18} />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">NexusFlow</span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Welcome back</h1>
            <p className="text-slate-500">Please enter your details to sign in.</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all focus:ring-2 focus:ring-emerald-500/20">
                <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="size-5" alt="Google" />
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all focus:ring-2 focus:ring-emerald-500/20">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="size-5" alt="GitHub" />
                <span>GitHub</span>
              </button>
            </div>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="mx-4 flex-shrink-0 text-xs font-bold uppercase text-slate-400 tracking-widest">Or continue with</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            <form onSubmit={handleSignIn} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700" htmlFor="email">Email address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                    <Mail size={18} />
                  </div>
                  <input 
                    id="email" 
                    type="email" 
                    placeholder="name@company.com" 
                    required 
                    className="block w-full rounded-xl border-gray-200 bg-gray-50/50 py-3.5 pl-11 pr-4 text-sm focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-700" htmlFor="password">Password</label>
                  <a href="#" className="text-sm font-bold text-emerald-600 hover:text-emerald-700">Forgot password?</a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                    <Lock size={18} />
                  </div>
                  <input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    required 
                    className="block w-full rounded-xl border-gray-200 bg-gray-50/50 py-3.5 pl-11 pr-4 text-sm focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="mt-2 w-full flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all active:scale-[0.98]"
              >
                Sign In
              </button>
            </form>

            <p className="text-center text-sm text-slate-500 mt-4">
              Don't have an account? 
              <a href="#" className="ml-1 font-bold text-emerald-600 hover:text-emerald-700">Sign up for free</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
