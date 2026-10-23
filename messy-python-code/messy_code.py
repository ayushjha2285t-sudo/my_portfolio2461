def calculate_total(numbers):
    """Return the sum of all numbers."""
    return sum(numbers)


def calculate_average(numbers):
    """Return the average, or 0 for an empty list."""
    if not numbers:
        return 0

    return calculate_total(numbers) / len(numbers)


def main():
    numbers = [10, 20, 30, 40, 50]

    total = calculate_total(numbers)
    average = calculate_average(numbers)

    print("Numbers:", numbers)
    print("Total:", total)
    print("Average:", average)


if __name__ == "__main__":
    main()
