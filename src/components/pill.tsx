

export const Pill = ({
  value,
  type,
}: {
  value: string;
  type?: "yellow" | "green" | "paid" | "unpaid";
}) => {
  const { bg, text }: any = type
    ? pills.find((item) => item.type === type)
    : pills[0];

  return (
    <small
      className={`${bg} ${text} w-fit px-[.75rem] py-[.25rem] max-md:text-[.6rem] text-[.75rem] flex items-center gap-[.5rem] rounded-[6.25rem]`}
    >
      {value}
    </small>
  );
};

const pills = [
  {
    type: "yellow",
    bg: "bg-status-yellow",
    text: "text-status-text-yellow",
  },
  {
    type: "green",
    bg: "bg-status-green",
    text: "text-status-text-green",
  },
  {
    type: "paid",
    bg: "bg-paid",
    text: "text-paid-text",
  },
  {
    type: "unpaid",
    bg: "bg-unpaid",
    text: "text-unpaid-text",
  },
];

export const PresencePill = ({
  activity = "online",
}: {
  activity?: "online" | "offline";
}) => {
  const dot = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="6"
      viewBox="0 0 7 6"
      fill="none"
    >
      <circle
        cx="3.69141"
        cy="3"
        r="3"
        fill={activity === "online" ? "#0F8152" : "#B0170C"}
      />
    </svg>
  );

  return (
    <div
      className={`flex items-center gap-[.38rem] rounded-full w-fit h-fit pl-[.65rem] pr-[.75rem] py-[.25rem] ${
        activity === "online"
          ? "bg-green-100 text-green"
          : "bg-red-100 text-danger"
      } font-medium`}
    >
      {dot}

      <small className="max-md:hidden">
        {activity === "online" ? "Online" : "Offline"}
      </small>
    </div>
  );
};


