const firstCharacterUpper = (category: string) => {
  {
    return (
      category.charAt(0).toUpperCase() + category.slice(1).replaceAll('-', ' ')
    );
  }
};
export { firstCharacterUpper };
