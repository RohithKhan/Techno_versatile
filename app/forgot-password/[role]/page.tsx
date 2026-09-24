import { notFound } from 'next/navigation';
import { ForgotPasswordForm } from '@/components/auth/forgot-password-form';
import { ROLES, isRoleSlug } from '@/lib/roles';

export function generateStaticParams() {
  return ROLES.map((r) => ({ role: r.slug }));
}

export default function ForgotPasswordPage({ params }: { params: { role: string } }) {
  if (!isRoleSlug(params.role)) notFound();
  return <ForgotPasswordForm slug={params.role} />;
}
