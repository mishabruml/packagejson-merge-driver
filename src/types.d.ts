declare module "merge-package.json" {
	function mergePackageJson(
		local: string,
		base: string,
		remote: string
	): string;
	export = mergePackageJson;
}
