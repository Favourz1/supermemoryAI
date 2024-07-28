import MillionLint from "@million/lint";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const baseNextConfig = {
	transpilePackages: ["@repo/ui"],
	reactStrictMode: false,
	env: {
		TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
	},
};

let selectedCofig = baseNextConfig;

if (process.env.NODE_ENV === "development") {
	selectedCofig = MillionLint.next({
		rsc: true,
	})(baseNextConfig);
}

export default selectedCofig;
