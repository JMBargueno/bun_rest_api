/**
 * The function `getPost` returns the string "No post".
 * @returns "No post"
 */
export const getPost = (context: any) => {
    const name = context.query.name
    if (name) return "No post containing " + name
    return "No post"
}