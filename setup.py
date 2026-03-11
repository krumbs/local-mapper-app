from setuptools import setup

setup(
    name="atlas",
    version="0.1.0",
    packages=["atlas"],
    entry_points={
        "console_scripts": [
            "atlas = atlas.__main__:main",
        ]
    },
)
