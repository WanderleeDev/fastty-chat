#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status

# Upgrade pip and setuptools
python3 -m pip install --upgrade pip setuptools wheel

# Install requirements with verbose output
python3 -m pip install --verbose -r requirements.txt
