import random
import json

# ---------- Data ----------

civilizations = {
    "Phoenicia": {"era": "Ancient", "resources": ["Trade", "Ships"], "religion": "Polytheism"},
    "Holy Roman Empire": {"era": "Medieval", "resources": ["Land", "Knights"], "religion": "Christianity"},
    "Haiti": {"era": "Post-Revolution", "resources": ["Sugar", "Coffee"], "religion": "Christianity"},
}

# ---------- Character Creation ----------

def create_ruler():
    name = input("Enter your ruler's name: ")
    skill = random.randint(1, 10)
    ambition = random.randint(1, 10)
    charisma = random.randint(1, 10)
    ruler = {
        "name": name,
        "skill": skill,
        "ambition": ambition,
        "charisma": charisma
    }
    print(f"Ruler Created: {ruler}")
    return ruler

# ---------- Choose Civilization ----------

def choose_civilization():
    print("Available Civilizations:")
    for i, civ in enumerate(civilizations.keys(), 1):
        print(f"{i}. {civ}")
    choice = int(input("Choose your civilization by number: "))
    civ_name = list(civilizations.keys())[choice-1]
    civ_data = civilizations[civ_name]
    print(f"You chose: {civ_name} -> {civ_data}")
    return civ_name, civ_data

# ---------- Start Game ----------

def start_game():
    civ_name, civ_data = choose_civilization()
    ruler = create_ruler()
    print("\nWelcome to History: Your Way!")
    print(f"As {ruler['name']} of {civ_name}, you can reshape history however you want...\n")
    # Here we can start adding events, actions, etc.

start_game()
