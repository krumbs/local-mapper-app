from setuptools import setup

setup(
    name="my_project",
    version="0.1.0",
    packages=["my_project"],
    entry_points={
        "console_scripts": [
            "atlas = atlas.__main__:main"
        ]
    },
)
