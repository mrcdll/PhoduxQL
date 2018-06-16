defmodule PhoduxQL.Repo.Migrations.CreateTasks do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      add :name, :string
      add :description, :string
      add :note_id, references(:notes, on_delete: :nothing)

      timestamps()
    end

    create index(:tasks, [:note_id])
  end
end
