// file path: src/profile/index.jsx

export const printProfile = (profileData) => {
  const { name, company } = profileData;
  console.log(`${name} from ${company}`);
};
