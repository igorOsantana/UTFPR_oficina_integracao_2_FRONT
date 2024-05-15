'use client';

import OI2Logo from '@/app/ui/oi2-logo';
import Authenticator from '@/app/lib/authenticator';
import RegisterForm from '@/app/ui/authentication/register-form';

export default function RegisterPage() {
  return (
    <Authenticator.Public>
      <main className="flex items-center justify-center md:h-screen">
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
          <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
            <div className="w-32 text-white md:w-36">
              <OI2Logo />
            </div>
          </div>
          <RegisterForm />
        </div>
      </main>
    </Authenticator.Public>
  );
}
