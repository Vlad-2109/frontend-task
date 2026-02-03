const FIRST_TASKS_LIST = [
  "Sprememba gesel",
  "Varnostna kopija spletne strani",
  "Posodobitev WordPressa",
  "Pregled in brisanje vsiljivih komentarjev",
  "Testiranje obrazcev",
];

const SECOND_TASKS_LIST = [
  "Optimizacija podatkovne baze",
  "Ureditev 404 napak",
  "Ureditev zlomljenih povezav",
  "Optimizacija slik",
  "Pregled WordPress vpisov",
];

const TasksList = () => {
  return (
    <div className="flex flex-col gap-3 pb-8">
      <h2 className="text-[#002A00]  dark:text-gray-300 font-black font-(family-name:--font-montserrat) text-2xl">
        10 osnovnih nalog vzdrževanja WordPress spletne strani
      </h2>
      <p className="text-base font-(family-name:--font-anonymous) font-normal">
        Oglejmo si osnovne naloge vzdrževanja in kako jih najlažje izvedete.
      </p>

      <div className="max-w-[700px] flex flex-col lg:flex-row justify-between text-base font-(family-name:--font-anonymous) font-normal">
        <ol className="list-decimal pl-6">
          {FIRST_TASKS_LIST.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ol>
        <ol className="list-decimal pl-6" start={6}>
          {SECOND_TASKS_LIST.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TasksList;
