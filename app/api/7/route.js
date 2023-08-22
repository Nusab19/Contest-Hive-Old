
const API_URL = "https://raw.githubusercontent.com/Nusab19/Contest-Hive/main/cache/Data/toph.json";

export async function GET() {
	const response = await fetch(API_URL, {
	next: {
	  revalidate: 10 * 60, // 10 Minutes
	},
	});
	
	const data = await response.json();
	return new Response(JSON.stringify(data, null, 4));
}