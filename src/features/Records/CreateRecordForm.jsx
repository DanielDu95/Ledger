function CreateRecordForm({ children }) {
  return (
    <div className="min-h max-w-[450px] flex-grow overflow-y-scroll bg-white">
      <form>{children}</form>
    </div>
  );
}

export default CreateRecordForm;
