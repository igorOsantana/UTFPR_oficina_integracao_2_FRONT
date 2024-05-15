import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LoadingSpinner } from '../ui/skeletons';

export type AuthenticatorProps = {
  isPublic: boolean;
  children: React.ReactNode;
};

function Authenticator(props: AuthenticatorProps) {
  const [allowedToRender, setAllowedToRender] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('at');
    if (!token && !props.isPublic) {
      router.replace('/authentication/login');
    } else if (token && props.isPublic) {
      router.push('/dashboard');
    } else {
      setAllowedToRender(true);
    }
  }, []);

  if (!allowedToRender) {
    return <LoadingSpinner />;
  }

  return <>{props.children}</>;
}

Authenticator.Public = function PublicAuthenticator({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Authenticator isPublic>{children}</Authenticator>;
};

Authenticator.Private = function PrivateAuthenticator({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Authenticator isPublic={false}>{children}</Authenticator>;
};

export default Authenticator;
