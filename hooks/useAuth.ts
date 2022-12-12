import { IProfile } from './../models/auth';
import { authApi } from '@/api/auth-api';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/_internal';

export function useAuth(options?: Partial<PublicConfiguration>) {

	const {
		data: profile,
		error,
		mutate,
	} = useSWR('/profile', {
		dedupingInterval: 60 * 60 * 1000,
		revalidateOnFocus: false,
		...options,
	});

    const firstLoading = profile === undefined && error === undefined;

	async function login() {
		await authApi.login({
			username: 'test1',
			password: '123123',
		});

		await mutate();
	}

	async function logout() {
		await authApi.logout();
		mutate(null, false);
	}

	return {
		profile,
		error,
		login,
		logout,
        firstLoading
	};
}
