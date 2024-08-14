export default defineEventHandler(async (event) => {
  try {
    const name = getRouterParam(event, "pokemon");

    const response = await $fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log("event", name);

    return { id: response.id, name: response.name, sprite: response.sprites.front_default };
  } catch (error) {
    throw createError({ statusCode: 404, message: "Cant find the pokemon" });
  }
});
