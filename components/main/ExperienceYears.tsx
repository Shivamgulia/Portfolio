"use client";

import { useEffect, useState } from "react";

function ExperienceYears() {
  const [years, setYears] = useState(2);

  useEffect(() => {
    const startDate = new Date(2023, 5, 1);
    const today = new Date();
    const elapsedYears = today.getFullYear() - startDate.getFullYear();
    const hasPassedAnniversary =
      today.getMonth() > startDate.getMonth() ||
      (today.getMonth() === startDate.getMonth() &&
        today.getDate() >= startDate.getDate());

    setYears(elapsedYears - (hasPassedAnniversary ? 0 : 1));
  }, []);

  return <>{years}+</>;
}

export default ExperienceYears;
