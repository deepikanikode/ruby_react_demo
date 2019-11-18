export default async function getData() {
  return await fetch("/api/v1/users")
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
