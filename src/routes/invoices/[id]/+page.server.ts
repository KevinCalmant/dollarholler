import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
    if (params.id) return { id: params.id }
    throw error(404, 'Not found')
}