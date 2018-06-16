defmodule PhoduxQL.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :description, :string
    belongs_to :note, PhoduxQL.Note

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:description])
    |> validate_required([:description])
  end
end
