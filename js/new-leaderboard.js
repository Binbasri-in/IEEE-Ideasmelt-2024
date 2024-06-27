document.addEventListener('DOMContentLoaded', function() {
    const leaderboardData = [
        { rank: 1, team: 'Quantum Hackers', score: 940 },
        { rank: 2, team: 'Byte Me', score: 920 },
        { rank: 3, team: 'The Cirqle', score: 900 },
        { rank: 4, team: 'The Classical Bits', score: 890 },
        { rank: 5, team: 'The Qubit Brigade', score: 880 },
        { rank: 6, team: 'The Hadamard Gatecrashers', score: 870 },
        { rank: 7, team: 'The Bloch Sphere Blokes', score: 860 },
        { rank: 8, team: 'The Quantum Quarks', score: 850 },
        { rank: 9, team: 'The Quantum Quacks', score: 840 },
        { rank: 10, team: 'The Quantum Quandaries', score: 830 },
        { rank: 11, team: 'The Quantum Quanta', score: 820 },
        { rank: 12, team: 'The Quantum Quarks', score: 810 },
        { rank: 13, team: 'The Quantum Quasars', score: 800 },
        { rank: 14, team: 'The Quantum Quarks', score: 790 },
        { rank: 15, team: 'The Quantum Quarks', score: 780 },
 ];

    const tbody = document.getElementById('leaderboard-body');
    leaderboardData.forEach(item => {
        const row = `<tr>
                        <th scope="row">${item.rank}</th>
                        <td>${item.team}</td>
                        <td>${item.score}</td>
                    </tr>`;
        tbody.innerHTML += row;
    });
});
