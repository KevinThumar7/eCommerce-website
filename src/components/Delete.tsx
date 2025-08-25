interface DeleteProps {
  item: {
    id: string | number;
    quantity: number;
  };
  handleDelete: (id: number) => void;
}

function Delete({ item, handleDelete }: DeleteProps) {
  return (
    <div>
      <button
        title="delete"
        type="button"
        onClick={() => handleDelete(Number(item.id))}
        className="cursor-pointer"
      >
        <i className="bi bi-trash3"></i>
      </button>
    </div>
  );
}

export default Delete;
