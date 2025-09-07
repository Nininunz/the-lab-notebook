# Script provided solely for VS Code run convenience.
import subprocess

subprocess.run(["npm", "i"], check=True)
subprocess.run(["pnpm", "build"], check=True)
subprocess.run(["pnpm", "dev"], check=True)
