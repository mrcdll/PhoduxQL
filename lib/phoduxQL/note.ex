defmodule PhoduxQL.Note do
  use Ecto.Schema
  import Ecto.Changeset


  schema "notes" do
    field :name, :string
    has_many :tasks, PhoduxQL.Task

    timestamps()
  end

  @doc false
  def changeset(note, attrs) do
    note
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end
end
