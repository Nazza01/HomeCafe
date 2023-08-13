const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();

app.use(express.json());
app.use(
	require("express-session")({
		secret: "secret-key",
		resave: true,
		saveUninitialized: true,
	})
);
app.use(passport.initialize());
app.use(passport.session());

const users = [
	{
		id: 1,
		username: "nate_thomas_95@hotmail.com",
		password: "appleM1Pro01$",
	},
	{
		id: 2,
		username: "lawresg",
		password: "2312",
	},
];

passport.use(
	LocalStrategy((username, password, done) => {
		const user = users.find(
			(u) => u.username === username && u.password === password
		);

		if (user) {
			return done(null, user);
		} else {
			return done(null, false, { message: "Incorrect Credentials" });
		}
	})
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	const user = users.find((u) => u.id === id);
	done(null, user);
});

app.post("/api/auth", passport.authenticate("local"), (req, res) => {
	res.json({ message: "Login successful" });
});

app.get("/logout", (req, res) => {
	req.logout();
	res.json({ message: "Logout successful" });
});

app.listen(3001, () => {
	console.log("Server is running on port 3000");
});
