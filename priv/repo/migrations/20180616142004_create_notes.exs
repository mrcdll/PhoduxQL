defmodule PhoduxQL.Repo.Migrations.CreateNotes do
  use Ecto.Migration

  def change do
    create table(:notes) do
      add :name, :string

      timestamps()
    end

  end
end
