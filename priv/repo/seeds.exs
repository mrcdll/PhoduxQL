# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     PhoduxQL.Repo.insert!(%PhoduxQL.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will halt execution if something goes wrong.

alias PhoduxQL.{Repo, Note, Task}

groceries = %Task{name: "Groceries", description: "Buy Milk and Tuna"}
gas = %Task{name: "Car", description: "Put gas"}
cleaning = %Task{name: "Dry Cleaning", description: "Pick up shirts"}
tuesday = %Note{name: "Tuesday", tasks: [cleaning]} |> Repo.insert!

%Note{name: "Monday", tasks: [groceries, gas]} |> Repo.insert!
Ecto.build_assoc(tuesday, :task, cleaning) |> Repo.insert!

