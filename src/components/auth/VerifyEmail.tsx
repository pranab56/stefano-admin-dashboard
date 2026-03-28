"use client";

import { Button } from '@/components/ui/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';

import { motion } from 'framer-motion';

export default function VerifyEmail() {
  const [otp, setOtp] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (otp.length !== 6) {
      toast.error('Please enter the complete 6-digit code');
      return;
    }

    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Email verified successfully!');

      // Redirect to Reset Password
      setTimeout(() => {
        router.push('/auth/reset-password');
      }, 1000);
    }, 1500);
  };

  const handleResend = () => {
    setIsResending(true);
    // Simulate resend
    setTimeout(() => {
      setIsResending(false);
      toast.success('Verification code resent!');
    }, 2000);
  }

  return (
    <div className="flex min-h-screen bg-[#F8F7FC] font-sans items-center justify-center p-4">
      <div className="w-full max-w-[480px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 sm:p-10 bg-orange-50 rounded-xl shadow-sm border border-gray-100/50"
        >
          <div className="text-center mb-10">
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Verify OTP</h2>
            <p className="text-sm sm:text-base text-gray-500">
              We have sent a verification code to <span className="font-semibold text-gray-700">{email || "your email"}</span>.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 flex flex-col items-center">

            <div className="w-full flex justify-center">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => setOtp(value)}
              >
                <InputOTPGroup className="gap-1 sm:gap-2">
                  <InputOTPSlot index={0} className="w-10 h-10 sm:w-12 sm:h-12 border-gray-100 rounded-lg text-base sm:text-lg bg-[#F9FAFB] focus:ring-1 focus:ring-[#D3AB50]" />
                  <InputOTPSlot index={1} className="w-10 h-10 sm:w-12 sm:h-12 border-gray-100 rounded-lg text-base sm:text-lg bg-[#F9FAFB] focus:ring-1 focus:ring-[#D3AB50]" />
                  <InputOTPSlot index={2} className="w-10 h-10 sm:w-12 sm:h-12 border-gray-100 rounded-lg text-base sm:text-lg bg-[#F9FAFB] focus:ring-1 focus:ring-[#D3AB50]" />
                  <InputOTPSlot index={3} className="w-10 h-10 sm:w-12 sm:h-12 border-gray-100 rounded-lg text-base sm:text-lg bg-[#F9FAFB] focus:ring-1 focus:ring-[#D3AB50]" />
                  <InputOTPSlot index={4} className="w-10 h-10 sm:w-12 sm:h-12 border-gray-100 rounded-lg text-base sm:text-lg bg-[#F9FAFB] focus:ring-1 focus:ring-[#D3AB50]" />
                  <InputOTPSlot index={5} className="w-10 h-10 sm:w-12 sm:h-12 border-gray-100 rounded-lg text-base sm:text-lg bg-[#F9FAFB] focus:ring-1 focus:ring-[#D3AB50]" />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <Button
              type="submit"
              disabled={isLoading || otp.length !== 6}
              className="w-full h-12 bg-[#D3AB50] hover:bg-[#D3AB50] hover:opacity-80 text-white rounded-xl text-base font-semibold transition-all shadow-lg shadow-orange-200 group"
            >
              {isLoading ? 'Verifying...' : 'Verify Code'}
            </Button>

            <div className="text-center text-sm text-gray-600">
              Didn&apos;t receive the code?{' '}
              <button
                type="button"
                onClick={handleResend}
                disabled={isResending}
                className="text-[#D3AB50] font-semibold hover:underline disabled:opacity-50"
              >
                {isResending ? 'Sending...' : 'Resend'}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center pt-6 border-t border-gray-100">
            <Link
              href="/auth/login"
              className="text-gray-500 hover:text-[#D3AB50] font-medium inline-flex items-center gap-2 group transition-colors text-sm"
            >
              Back to Login
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

