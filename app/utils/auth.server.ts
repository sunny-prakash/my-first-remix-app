// app/utils/auth.server.ts

import type { RegisterForm, LoginForm } from "./types.server";
import { prisma } from "./prisma.server";
import { json } from "@remix-run/node";
import { createUser } from "./user.server";
import bcrypt from "bcryptjs";

export const register = async (user: RegisterForm) => {
	const exists = await prisma.user.count({ where: { email: user.email } });
	if (exists) {
		return json(
			{ error: `User already exists with that email` },
			{ status: 400 }
		);
	}
	const newUser = await createUser(user);
	if (!newUser) {
		return json(
			{
				error: `Something went wrong trying to create a new user.`,
				fields: { email: user.email, password: user.password },
			},
			{ status: 400 }
		);
	}
};

export const login = async ({ email, password }: LoginForm) => {
	const user = await prisma.user.findUnique({
		where: { email },
	});

	if (!user || !(await bcrypt.compare(password, user.password)))
		return json({ error: `Incorrect login` }, { status: 400 });

	return { id: user.id, email };
};
